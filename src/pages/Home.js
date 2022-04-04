/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

export default function Home() {
  const ref = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const delayBos = (ms) => new Promise((res) => setTimeout(res, ms));

  async function handleSubmit() {
    setError(null);
    const inputs = ref.current;
    const accessToken = inputs.accessToken.value;
    const count = inputs.count.value;
    const delay = inputs.delay.value;
    const targetLink = inputs.targetLink.value;
    if (
      [accessToken, count, delay, targetLink].some(
        (el) => el == "" || el == 0
      ) ||
      count > 1000 ||
      delay < 1
    ) {
      setError("Form not valid! No debat!");
    } else {
      setSpinner(true);
      for (let index = 0; index < count; index++) {
        fetch(
          `https://graph.facebook.com/me/feed?link=${targetLink}&published=false&access_token=${accessToken}&fields=id`,
          {
            method: "POST",
          }
        )
          .then((response) => response.json())
          .then((json) => {
            if (json.error) {
              setSpinner(null);
              setError(json.error.message);
              return;
            } else {
              setSpinner(null);
              setSuccess(index + 1);
              console.log(index + 1);
            }
          })
          .catch((err) => {
            setError(err);
          });
        await delayBos(1000 * delay);
      }
      setSuccess('babahaha');
    }
  }

  return (
    <div className="text-light px-5 pt-3">
      <div>
        {error ? (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{error}</p>
          </Alert>
        ) : (
          <div></div>
        )}
        {spinner ? <Spinner animation="border" /> : <div></div>}
        {success ? (
          <Alert variant="success">
            {success == 'babahaha' ? (
              <p>✅ Done</p>
            ) : (
              <Alert.Heading>{success}</Alert.Heading>
            )}
          </Alert>
        ) : (
          <div></div>
        )}
        <Form ref={ref}>
          <div>
            <Form.Group className="mb-3" controlId="access-token">
              <Form.Label>Access Token</Form.Label>
              <Form.Control
                type="text"
                name="accessToken"
                placeholder="Enter access token"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="count">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control
                type="number"
                name="count"
                min={1}
                max={1000}
                placeholder="Enter share count"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="delay">
              <Form.Label>Delay</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={10}
                name="delay"
                placeholder="Enter share delay"
                required
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="target-link">
              <Form.Label>Target Link</Form.Label>
              <Form.Control
                type="text"
                name="targetLink"
                placeholder="Enter target link"
                required
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              style={{ width: "100%" }}
              variant="success"
            >
              Share Now
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

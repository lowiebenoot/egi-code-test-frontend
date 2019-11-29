import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Breadcrumbs from "../components/ui/breadcrumbs"
import Button from "../components/ui/button"
import Input from "../components/ui/input"
import SEO from "../components/layout/seo"

const handleFormSubmit = event => {
  event.preventDefault()
  alert("This form doesn't actually work")
}

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Categories" />
        <Breadcrumbs>
          <Breadcrumbs.Item>
            <Link to="/">Home</Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>Contact</Breadcrumbs.Item>
        </Breadcrumbs>

        <h1>Contact</h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
          finibus justo vel ornare. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <form onSubmit={handleFormSubmit}>
          <Input name="email" label="Email" type="email" required />
          <Input
            element="textarea"
            rows="4"
            name="message"
            label="Message"
            required
          />
          <Button size="small">Send</Button>
        </form>
      </Layout>
    )
  }
}

export default ContactPage

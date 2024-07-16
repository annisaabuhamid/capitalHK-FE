import React from "react"
import Container from "@/components/common/atom/container/Container"
import Form from "@/components/resetPassword/Form"

const resetPassword: React.FC = () => {
  // const { code } = useParams<{ code: string }>();
  return (
    <Container>
      <div className="max-w-[1200px] mx-auto mt-6 mb-20 px-5 md:px-0">
        <Form />
      </div>
    </Container>
  )
}

export default resetPassword

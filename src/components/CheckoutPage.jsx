import { Button, Form, Input, InputNumber, Row, Col } from 'antd';

export default function CheckoutPage() {

  return (
    <Row justify="center" style={{ marginTop: 40 }}>
      <Col xs={24} sm={16} md={12} lg={8}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: "100%" }}
        >

          <Form.Item
            label="Nombre y Apellido"
            name="nombre"
            rules={[{ required: true, message: 'Campo obligatorio' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Telefono"
            name="telefono"
            rules={[{ required: true, message: 'Campo obligatorio' }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Campo obligatorio' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

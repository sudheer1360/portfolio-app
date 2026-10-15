import React, { useState } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { profileData } from '../data/mockData';

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: ContactFormValues) => {
    setLoading(true);
    // No backend yet: open the visitor's mail client with the message pre-filled.
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    message.info('Opening your email app to send the message.');
    form.resetFields();
    setLoading(false);
  };

  return (
    <SectionWrapper 
      id="contact" 
      title="Get In Touch" 
      subtitle="Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
    >
      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto mt-8">
        <div className="w-full lg:w-1/3">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Let's Connect</h3>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
            I'm always interested in hearing about new projects, opportunities, or just chatting about web development and technology.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-[var(--text-secondary)] text-sm mb-1">Email</span>
              <a href={`mailto:${profileData.email}`} className="text-[var(--text-primary)] hover:text-brand-primary text-lg font-medium transition-colors">
                {profileData.email}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--text-secondary)] text-sm mb-1">Socials</span>
              <div className="flex gap-4 mt-1">
                <a href={profileData.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">GitHub</a>
                <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-brand-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-8 shadow-lg">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Form.Item
                name="name"
                label={<span className="text-[var(--text-secondary)] font-medium">Name</span>}
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  size="large" 
                  placeholder="John Doe" 
                  className="bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-brand-primary focus:border-brand-primary"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="text-[var(--text-secondary)] font-medium">Email</span>}
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email address' }
                ]}
              >
                <Input 
                  size="large" 
                  placeholder="john@example.com" 
                  className="bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-brand-primary focus:border-brand-primary"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="subject"
              label={<span className="text-[var(--text-secondary)] font-medium">Subject</span>}
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input 
                size="large" 
                placeholder="Project Inquiry" 
                className="bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-brand-primary focus:border-brand-primary"
              />
            </Form.Item>

            <Form.Item
              name="message"
              label={<span className="text-[var(--text-secondary)] font-medium">Message</span>}
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea 
                rows={5} 
                placeholder="How can I help you?" 
                className="bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-brand-primary focus:border-brand-primary resize-none"
              />
            </Form.Item>

            <Form.Item className="mb-0 mt-8">
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large" 
                loading={loading}
                className="w-full sm:w-auto px-8 h-12 bg-brand-primary hover:bg-brand-primary/90 flex items-center justify-center gap-2"
              >
                Send Message {!loading && <SendOutlined />}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </SectionWrapper>
  );
};

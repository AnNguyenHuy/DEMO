import React from 'react';
import { Form, Input } from 'antd';

import BaseLayout from '@/components/logged-in-layout/BaseLayout';
import { CustomButton } from '@/components/button';
import { Select } from '@/components/select';

import { PaymentInfoContainer } from './styled';

export enum PaymentType {
  create,
  edit,
}

export interface Props {
  type: PaymentType;
}

function PaymentInfo({ type }: Props) {
  //   const { Option } = AntSelect;

  return (
    <BaseLayout>
      <PaymentInfoContainer>
        <div>okasodkasod</div>
        <Form colon={false}>
          <Form.Item label="alksjdl">
            <Input />
          </Form.Item>
          <Form.Item label="alksjdl">
            <div>
              <Select size="large" />
              <Select size="large" />
            </div>
          </Form.Item>
          <Form.Item label="alksjdl">
            <Input />
          </Form.Item>
          <Form.Item label="alksjdl">
            <Input />
          </Form.Item>
        </Form>
        {type === PaymentType.create && (
          <div>
            <CustomButton>asd</CustomButton>
            <CustomButton>asd</CustomButton>
          </div>
        )}
        {type === PaymentType.edit && (
          <div>
            <CustomButton>asd</CustomButton>
            <CustomButton>asd</CustomButton>
            <CustomButton>asd</CustomButton>
          </div>
        )}
      </PaymentInfoContainer>
    </BaseLayout>
  );
}

export default React.memo(PaymentInfo);

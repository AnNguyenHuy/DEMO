import React, { useCallback, useState } from 'react';

import BaseLayout from '@/components/logged-in-layout/BaseLayout';
import { CustomButton } from '@/components/button';
import { ModalCustom } from '@/components/modal';

import { PaymentContainer } from './styled';

function Payments() {
  //   const { Option } = AntSelect;
  const [state, setState] = useState({ isVisibleModal: false });
  const onClick = useCallback(() => {
    setState({ ...state, isVisibleModal: !state.isVisibleModal });
  }, [state]);
  return (
    <BaseLayout>
      <div>okasodkasod</div>

      <PaymentContainer>
        <div>a</div>
        <div>a</div>
        <div className="w-100 test">
          <CustomButton className="btn" onClick={onClick}>
            a
          </CustomButton>
          <ModalCustom
            type="question"
            visible={state.isVisibleModal}
            title="ok"
            okText="check"
            cancelText="asldklaskd"
            onCancel={onClick}
            onOk={onClick}
          >
            <div>
              <div>hehehehehe</div>
              <div>kakakakaka</div>
            </div>
          </ModalCustom>
        </div>
      </PaymentContainer>
    </BaseLayout>
  );
}

export default React.memo(Payments);

import React, { useCallback, useState } from 'react';

import BaseLayout from '@/components/logged-in-layout/BaseLayout';
import { CustomButton } from '@/components/button';
import { ModalCustom } from '@/components/modal';
import { useTranslation } from '@utils/i18n';

import { Footer, PaymentMethodContainer, Title } from './styled';

function PaymentMethod() {
  const { t } = useTranslation('common');
  const [state, setState] = useState({ isVisibleModal: false });
  const onClick = useCallback(() => {
    setState({ ...state, isVisibleModal: !state.isVisibleModal });
  }, [state]);
  return (
    <BaseLayout>
      <Title>ok</Title>
      <PaymentMethodContainer>
        <div>visa </div>
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
        <Footer>
          <div>btn</div>
          <div className="coppy-right">{t('.coppyRight')}</div>
        </Footer>
        {/* <div className="footer"></div> */}
      </PaymentMethodContainer>
    </BaseLayout>
  );
}

export default React.memo(PaymentMethod);

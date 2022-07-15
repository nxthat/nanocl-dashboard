import Image from 'next/image';
import React from 'react';
import { Button, FormControl, NativeSelect } from '@mui/material';

import Styled from '@emotion/styled';

import Separator from '../Separator';
import * as Style from './style';

export type PropsHeader = {
};

const SSelect = Styled(NativeSelect)`
  color: white;
  cursor: none;
`;

const SFormControl = Styled(FormControl)`
  width: 200px;
`;

const Header = ({}: PropsHeader) => (
  <Style.ContainerHeaderShadow>
    <Style.ContainerHeader>
      <Style.ContentHeader>
        <Style.TitleContainer>
          <Image
            width={45}
            height={45}
            src="/favicon.png"
          />
          <Style.HeaderTitle>
            Nanocl {'>'}
          </Style.HeaderTitle>
          <SFormControl>
            <SSelect
              defaultValue={1}
            >
            <option value={1}>Ten</option>
            <option value={2}>Twenty</option>
            <option value={3}>Thirty</option>
          </SSelect>
        </SFormControl>
        </Style.TitleContainer>
        <Style.ContentHeaderLeft>
          <Style.HeaderLink>
            Product
          </Style.HeaderLink>
          <Style.HeaderLink>
            Solutions
          </Style.HeaderLink>
          <Style.HeaderLink>
            Services & Support
          </Style.HeaderLink>
          <Style.HeaderLink>
            Next Hat & Open source
          </Style.HeaderLink>
        </Style.ContentHeaderLeft>
        <Style.ContentHeaderRight>
          <Button variant="text">Console</Button>
        </Style.ContentHeaderRight>
      </Style.ContentHeader>
    </Style.ContainerHeader>
    <Separator />
  </Style.ContainerHeaderShadow>
);

export default Header;

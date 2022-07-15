import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import type { Dispatch } from '~/utils/redux';
import type { NextRouter } from 'next/router';
import type { State } from '~/redux/reducers';

import { counterSet } from '~/redux/actions/home';

import * as Style from './style';
import { Box, Button, Modal, Typography } from '@mui/material';

const actions = {
  counterSet,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const mapStateToProps = (state: State) => ({
  counter: state.home.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) =>
  bindActionCreators(actions, dispatch);

export type HomeContainerProps = {
  router: NextRouter;
}
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

class HomeContainer extends
  React.PureComponent<HomeContainerProps> {
  state = {
    isModalOpen: false,
  }

  handleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {

    const {
      isModalOpen
    } = this.state;

    return (
      <Style.Container>
        <Modal
          open={isModalOpen}
          onClose={this.handleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        <Style.Center>
        <Button onClick={this.handleModal}>Open modal</Button>
        </Style.Center>
      </Style.Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeContainer));

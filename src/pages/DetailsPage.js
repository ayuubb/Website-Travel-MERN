import React, { Component } from 'react';
import Header from 'parts/Header';

import PageDetalTitle from 'parts/PageDetailTitle';

import itemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Detail Page';
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'Home Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetalTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetalTitle>
      </>
    );
  }
}

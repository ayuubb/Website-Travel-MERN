import React, { Component } from 'react';
import Header from 'parts/Header';
import PageDetalTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

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
        <Header {...this.props} />
        <PageDetalTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetalTitle>
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails} />
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

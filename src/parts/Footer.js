import React from 'react';

import Button from 'elements/Button';
import IconText from 'parts/IconText';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tag-line">
              Curated stays that turn your free days into journeys worth
              remembering.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/UsePayments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/term">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:hello@voyago.travel"
                >
                  hello@voyago.travel
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+62215500123">
                  021 - 5500 - 0123
                </Button>
              </li>
              <li className="list-group-item">
                <span>Voyago, Senayan, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2026 • All rights reserved • Voyago
          </div>
        </div>
      </div>
    </footer>
  );
}

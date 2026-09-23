
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Join our gaming community on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 d-flex align-items-center justify-content-center justify-content-md-start'>
                <img src='/browser-icon.png' alt='Game Hub Logo' width='28' height='28' className='me-2 rounded' />
                Game Hub
              </h6>
              <p>
                Your #1 gaming destination in Tunisia. Discover the best gaming PC builds,
                high-end components, and accessories at unbeatable prices.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Gaming PCs & Laptops
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Graphics Cards
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Headsets & Audio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gaming Accessories
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Deals & Special Offers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Order Tracking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shipping Across Tunisia
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Warranty & Support
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Habib Bourguiba Ave, Tunis 1001
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                contact@gamehub.tn
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +216 71 234 567
              </p>
              <p>
                <MDBIcon color='secondary' icon='mobile-alt' className='me-3' /> +216 98 765 432
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2026 Copyright:{' '}
        <a className='text-reset fw-bold' href='#!'>
          Game Hub Tunisia
        </a>
      </div>
    </MDBFooter>
  );
}

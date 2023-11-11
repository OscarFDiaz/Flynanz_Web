import { IconExternalLink } from '@tabler/icons-react';
import mock from '../../assets/mock_download.png';

export const Download = () => {
  return (
    <section className="download">
      <div className="download__content-container">
        <div className="download__container">
          <div className="download__text-container">
            <h2 className="download__title">Make the money last</h2>
            <p className="download__subtitle">
              Managing money wisely ensures financial security and the ability to pursue
              long-term dreams and unexpected opportunities.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
              target="_blank"
              rel="noreferrer noopener"
              className="download__anchor download__anchor--download"
            >
              Download
              <IconExternalLink />
            </a>
          </div>
          <div className="download__mock">
            <picture className="download__picture">
              <img src={mock} alt="download mockup" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

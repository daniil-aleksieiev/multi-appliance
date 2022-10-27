import './pageContent.scss';

const PageContent = ({ title, content, image }) => (
  <section className="page-content">
    <div className="container">
      <div className="page-content__text">
        <h2 className="section-title">
          {title}
          <br />
          Experts
        </h2>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div className="page-content__image">
        <div className="page-content__image--inner">
          <div />
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  </section>
);

export default PageContent;

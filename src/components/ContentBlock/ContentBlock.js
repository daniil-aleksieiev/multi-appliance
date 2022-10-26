import './contentBlock.scss';

const ContentBlock = ({ title, content }) => (
  <div className="content-wrapper">
    <div className="container">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

export default ContentBlock;

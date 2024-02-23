interface InfoArticleProps {
  title: string;
  children: React.ReactNode;
}
function InfoArticle(props: InfoArticleProps) {
  const { title, children } = props;
  return (
    <article className="mb-3">
      <h1 className="font- text-xl font-extrabold text-generator-primary">
        {title}
      </h1>
      {children}
    </article>
  );
}

export default InfoArticle;

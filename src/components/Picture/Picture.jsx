export default function Picture({ small, medium, large, alt }) {
  return (
    <picture>
      <source
        media="(max-width: 375px)"
        srcSet={`${process.env.PUBLIC_URL}${small.substr(1)}`}
      />

      <source
        media="(max-width: 768px)"
        // Trending movies do not have medium size image
        srcSet={`${process.env.PUBLIC_URL}${(medium ?? large).substr(1)}`}
      />

      <img src={`${process.env.PUBLIC_URL}${large.substr(1)}`} alt={alt} />
    </picture>
  );
}

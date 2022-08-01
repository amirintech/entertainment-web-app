export default function Picture({ small, medium, large, alt }) {
  return (
    <picture>
      <source media="(max-width: 375px)" srcSet={small} />

      <source media="(max-width: 768px)" srcSet={medium} />

      <img src={large} alt={alt} />
    </picture>
  );
}

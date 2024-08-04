
// intead of props we can also use the destructuring. so just use the {} and pass the keys inside, so the keys here are image, title desctiption
export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3> {title} </h3>
        <p> {description} </p>
      </li>
    );
  }
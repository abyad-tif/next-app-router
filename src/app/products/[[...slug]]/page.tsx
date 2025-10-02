type DetailProduct = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProduct) {
  const { params } = props;
  return (
    <div>
      <h1>{params.slug ? "Product List" : "Detail Product"}</h1>
      {params.slug && (
        <>
          <p>Category: {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Id: {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}

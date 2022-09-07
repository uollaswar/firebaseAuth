import { useParams } from 'react-router-dom';

export default function Invoice() {
  let params = useParams();
  console.log(params);

  return <h2>Invoice #???</h2>;
}

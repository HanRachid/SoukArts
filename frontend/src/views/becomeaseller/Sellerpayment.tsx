import {Seller} from '../../../types';
import SellerPayment from '../../components/becomeaseller/SellerPayment';

export default function BecomeSellerListing({
  setSeller,
  seller,
}: {
  setSeller: Function;
  seller: Seller;
}) {
  return (
    <div>
      <SellerPayment isSeller={true} setSeller={setSeller} seller={seller} />
    </div>
  );
}

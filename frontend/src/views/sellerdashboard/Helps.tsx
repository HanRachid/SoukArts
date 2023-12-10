const faqs = [
    {
      id: 2,
      question: "How can I create an account on SoukArt?",
      answer:
        "To create an account on SoukArt, click on the 'Sign Up' button located on the top right corner of the website. Fill in the required information, such as your name, email address, and password. Once you've completed the form, click 'Sign Up' to create your account.",
    },
    {
      id: 3,
      question: "How can I place an order?",
      answer:
        "To place an order on SoukArt, follow these steps: 1. Browse the website and find the product you want to purchase. 2. Click on the product to view its details. 3. Select the desired options, such as size or color, if applicable. 4. Click 'Add to Cart' to add the item to your shopping cart. 5. Review the items in your cart and click 'Checkout' to proceed. 6. Enter your shipping and payment information. 7. Review your order details and click 'Place Order' to complete the purchase.",
    },
    {
      id: 4,
      question: "What payment methods are accepted on SoukArt?",
      answer:
        "SoukArt accepts various payment methods, including credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. You can select your preferred payment method during the checkout process.",
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer:
        "To track your order on SoukArt, log in to your account and go to the 'Orders' section. Here, you will find a list of your recent orders along with their status. Click on the specific order you want to track to view more details, including the tracking number. You can use the tracking number to track the shipment on the courier's website.",
    },
    {
      id: 6,
      question: "What is SoukArt's return policy?",
      answer:
        "SoukArt offers a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery. The item must be in its original condition and packaging. To initiate a return, contact our customer support team or use the 'Returns' option in your account. Please note that certain items, such as personalized or perishable products, may not be eligible for return.",
    },
    {
      id: 7,
      question: "How can I contact SoukArt's customer support?",
      answer:
        "If you have any questions or need assistance, you can reach SoukArt's customer support team by phone at 1-800-123-4567 or by email at support@soukart.com. Our customer support representatives are available to assist you from Monday to Friday, 9am to 5pm.",
    },
    // Add more questions and answers as needed
  ];
  
  export default function Helps() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-primary">Frequently asked questions</h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
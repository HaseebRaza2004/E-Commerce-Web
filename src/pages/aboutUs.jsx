
function AboutUs() {

  return (
    <div className="container mx-auto bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl underline font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            Your one-stop shop for all your needs. We are committed to bringing you the best quality products at affordable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3BwaW5nfGVufDB8fDB8fHww"
              alt="Our Team"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl underline font-bold text-gray-800 mb-4">
                Who We Are :
              </h3>
              <p className="text-gray-600 mb-6">
                We started with a simple idea: providing our customers with high-quality products and exceptional service. Our team is dedicated to finding the best items and ensuring a seamless shopping experience.
              </p>
              <h3 className="text-2xl underline font-bold text-gray-800 mb-4">
                Our Mission :
              </h3>
              <p className="text-gray-600">
                Our mission is to deliver value and satisfaction. We believe in offering a diverse range of products, ensuring customer satisfaction, and creating long-lasting relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl underline font-bold text-gray-800 mb-4">
            Our Values
          </h3>
          <div className="flex justify-center space-x-12">
            <div>
              <div className="text-4xl text-gray-800 mb-2">🌟</div>
              <h4 className="font-bold text-gray-700">Quality</h4>
              <p className="text-gray-600">
                We believe in delivering only the best products to our customers.
              </p>
            </div>
            <div>
              <div className="text-4xl text-gray-800 mb-2">💡</div>
              <h4 className="font-bold text-gray-700">Innovation</h4>
              <p className="text-gray-600">
                Continuously seeking to improve and introduce new products.
              </p>
            </div>
            <div>
              <div className="text-4xl text-gray-800 mb-2">🤝</div>
              <h4 className="font-bold text-gray-700">Trust</h4>
              <p className="text-gray-600">
                Building long-term relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
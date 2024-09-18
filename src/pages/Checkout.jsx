import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutCustomerInfo from "../checkout/CheckoutCustomerInfo";
import CheckoutShippingInfo from "../checkout/CheckoutShippingInfo";
import CheckoutSummary from "../checkout/CheckoutSummary";

function Checkout() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (formValues.name.trim() === "") {
      validationErrors.name = "Name cannot be empty!";
    }

    if (formValues.email.trim() === "") {
      validationErrors.email = "Email cannot be empty!";
    } else if (!emailRegex.test(formValues.email)) {
      validationErrors.email = "Enter a valid email!";
    }

    if (formValues.phone.trim() === "") {
      validationErrors.phone = "Phone cannot be empty!";
    } else if (!phoneRegex.test(formValues.phone)) {
      validationErrors.phone = "Enter a valid phone number!";
    }

    if (formValues.address.trim() === "") {
      validationErrors.address = "Address cannot be empty!";
    }

    if (formValues.city.trim() === "") {
      validationErrors.city = "City cannot be empty!";
    }

    if (formValues.zip.trim() === "") {
      validationErrors.zip = "Zip cannot be empty!";
    }

    if (formValues.country.trim() === "") {
      validationErrors.country = "Country cannot be empty!";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formValues);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__content">
        <Link to="/" className="checkout__back-link button">
          Go Back
        </Link>
        <form className="checkout__details" onSubmit={handleSubmit} noValidate>
          <div className="checkout__group">
            <h1 className="checkout__title">Checkout</h1>
            <div className="checkout__forms">
              <CheckoutCustomerInfo
                formValues={formValues}
                errors={errors}
                handleInputChange={handleInputChange}
              />
              <CheckoutShippingInfo
                formValues={formValues}
                errors={errors}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <CheckoutSummary />
        </form>
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  reviews: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <blockquote>"{review.quote}"</blockquote>
            <cite>- {review.author}</cite>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;

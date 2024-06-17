import React from 'react';

const VerifyEmail = ({ onVerificationComplete }) => {
  return (
    <div>
      <h2>Verify Your Email</h2>
      <p>
        A verification link has been sent to your email. Please check your email
        and click the link to verify your account. Once verified, you can log in.
      </p>
      <button className="btn btn-primary" onClick={onVerificationComplete}>
        Verification Complete
      </button>
    </div>
  );
};

export default VerifyEmail;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { getProfile } from '../../services/profiles';
import logo from '../../assets/Logo_orange.svg';
import './partnerDetails.css';

const PartnerDetails = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const profileDetails = await getProfile(id);
      setPartner(profileDetails);
    };

    fetchProfile();
  }, [id]);

  return (
    <div className="partnerDetails-container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="app-name">RacketMate</h3>
      <Link to="/choose-partner" className="back-arrow-detail">
        <MdArrowBack />
      </Link>
      <div className="card">
        <div className="initial-container">
          <div className="initial">{partner.name?.[0]}</div>
          <button className="msg-button">Message</button>
        </div>
        <div className="details">
          <div className="name-surname-detail">
            {partner.name} {partner.surname}
          </div>
          <div className="gender-skill-club">
            <p>
              <span>Gender: </span> <span>{partner.gender}</span>
            </p>
            <p>
              <span>Level: </span> <span>{partner.skill_level}</span>
            </p>
            <p>
              <span>Club: </span> <span>{partner.club}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;

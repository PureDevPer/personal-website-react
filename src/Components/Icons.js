import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Email = () => <FontAwesomeIcon icon={faEnvelope} size="2x" />;

export const Github = () => <FontAwesomeIcon icon={faGithub} size="2x" />;

export const LinkedIn = () => <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;

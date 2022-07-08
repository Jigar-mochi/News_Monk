import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { FaArrowCircleDown } from 'react-icons/fa';
import { Button } from './Styles';
import { Button2 } from './Styles2';

const ScrollButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
			/* you can also use 'auto' behaviour
				in place of 'smooth' */
		});
	};
	const heigh = Math.max(document.body.scrollHeight)
	console.log(heigh)
	const scrollToBottum = () => {
		window.scrollTo({
			top: heigh,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<>
			<Button2>
				<FaArrowCircleDown onClick={scrollToBottum}
					style={{ display: visible ? 'inline' : 'none' }} />
			</Button2>
			<Button>
				<FaArrowCircleUp onClick={scrollToTop}
					style={{ display: visible ? 'inline' : 'none' }} />
			</Button>
		</>
	);
}

export default ScrollButton;

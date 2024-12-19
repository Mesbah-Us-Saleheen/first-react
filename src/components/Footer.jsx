export default function Footer(props){
	return(
		<>
			<footer className={props.darkMode ? "dark" : ""}>
				<small className="footer--text">© 2024 Scrimba development. All rights reserved.</small>
			</footer>
		</>
	)
}
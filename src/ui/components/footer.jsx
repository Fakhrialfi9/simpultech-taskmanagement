import footerStyle from "../../assets/style/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className='Container'>
        <div className={footerStyle.content}>
          <h5>© 2020 Simpul Technologies</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

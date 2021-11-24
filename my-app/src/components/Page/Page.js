import styles from "./Page.module.scss";

const Page = ({ 
    header, 
    content 
}) => (
  <div>
    <div>{header}</div>

    <div className={styles.Page}>{content}</div>
  </div>
);

export default Page;

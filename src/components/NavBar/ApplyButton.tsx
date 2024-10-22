import classes from './ApplyButton.module.css';

const ApplyButton = () => (
    <a
        href="https://root.treehacks.com"
        rel="noopener noreferrer"
        className={classes.button}
        // data-tooltip="Open soon!"
    >
        Apply
    </a>
);

export default ApplyButton;

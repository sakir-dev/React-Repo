function ResetButton({ id, reset }) {
  return (
    <button className={`row-item reset-btn`} onClick={() => reset(id)}>
      reset
    </button>
  );
}

export default ResetButton;


import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-green-100 text-green-600 dark:bg-green-500/10',
    Inactive: 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800',
    Pending: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${styles[status] || styles.Inactive}`}>
      {status}
    </span>
  );
};

export default StatusBadge;

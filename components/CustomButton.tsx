'use client';

import { CustomButtonProps } from '@/types';
import Link from 'next/link';
import React from 'react';

function CustomButton({ title, containerStyles, link }: CustomButtonProps) {
  return (
    <>
      <Link href={`${link}`} className={`custom-btn ${containerStyles}`}>
        <button disabled={false} type={'button'}>
          <span className="flex-1">{title}</span>
        </button>
      </Link>
    </>
  );
}

export default CustomButton;

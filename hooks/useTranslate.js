import React, {useState, useEffect, useRef} from 'react';
import useTranslation from "next-translate/useTranslation";


/**
 * Returns if the keyboard is open / closed
 *
 * @return {string} t
 */
export function useTranslate(key, query) {
  const {t, lang}  = useTranslation('common');

  return t(key, query);
}

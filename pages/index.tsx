import * as React from 'react';
import Link from 'next/link'

export default () =>
    <div>
        Welcome to next.js!
        <Link href="/about">
            <a>here</a>
        </Link>
    </div>
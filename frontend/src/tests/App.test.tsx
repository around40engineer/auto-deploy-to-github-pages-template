import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import App from '../App.tsx';

describe('App', () => {
    it('レンダーされたら各種要素が表示される', async() => {
        render(<App />)

        expect(screen.getByText('hello world!!!')).toBeInTheDocument()
    })
})

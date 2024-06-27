import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormElement from "@/components/FormElement";
import {describe, expect, it} from "vitest";


describe('FormElement', () => {
    it('Quando usuário preenche email e senha e envia o formulário deve ficar limpo', async () => {
        render(<FormElement />);

        const data = {
            name: 'test@email.com',
            password: "senhadificil123"
        }

        const emailInput = screen.getByLabelText('E-mail',{});
        fireEvent.change(emailInput, { target: { value: data.name } });
        expect(emailInput.value).toBe(data.name);

        const passwordInput = screen.getByLabelText('Senha',{});
        fireEvent.change(passwordInput, { target: { value: data.password } });
        expect(passwordInput.value).toBe(data.password);

        fireEvent.click(screen.getByText('Enviar',{}));

        await waitFor(() => {
            expect(emailInput.value).toBe("");
            expect(passwordInput.value).toBe("");
        });
    });
});
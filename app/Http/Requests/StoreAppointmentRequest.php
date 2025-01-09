<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required','string','max:255'],
            'meeting_at' => ['required','date'],
            'phone_number' => ['required','string','max:255'],
            'email' => ['required','string','max:255'],
            'product_id' => ['required','integer'],
            'budget' => ['required','integer'],
            'brief' => ['required','string','max:65535']
        ];
    }
}

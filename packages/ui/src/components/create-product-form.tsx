import api from '@/api';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateProductDTO } from 'api';
import { FC } from 'react';

const CreateProductForm: FC = () => {
  const queryClient = useQueryClient();

  const createProductMutation = useMutation({
    mutationFn: async (value: CreateProductDTO) => {
      return api.createProduct(value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      form.reset();
    },
  });

  const form = useForm<CreateProductDTO>({
    defaultValues: {
      name: '',
    },
    onSubmit: async ({ value }) => {
      await createProductMutation.mutateAsync(value);
    },
  });

  return (
    <div className="border border-slate-800 rounded">
      <h1 className="m-4 font-bold text-lg">Create Product</h1>
      <div className="border-b border-slate-800"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="p-4 flex flex-col gap-4"
      >
        <div>
          {/* A type-safe field component*/}
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) => (!value ? 'A Name is required' : undefined),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes('error') && 'No "error" allowed in name';
              },
            }}
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className='flex gap-4 items-center'>
                  <label htmlFor={field.name}>Productname:</label>
                  <input
                    className="border border-slate-800 rounded grow"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              );
            }}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className="flex gap-4 justify-end">
              <button
                className="py-1 px-2 bg-slate-800 text-white rounded"
                type="submit"
                disabled={!canSubmit}
              >
                {isSubmitting ? '...' : 'Submit'}
              </button>
              <button
                className="py-1 px-2 bg-slate-800 text-white rounded"
                type="reset"
                onClick={() => form.reset()}
              >
                Reset
              </button>
            </div>
          )}
        />
      </form>
    </div>
  );
};

export default CreateProductForm;

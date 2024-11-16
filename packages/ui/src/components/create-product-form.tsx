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
      url: '',
    },
    onSubmit: async ({ value }) => {
      await createProductMutation.mutateAsync(value);
    },
  });

  return (
    <div className="border border-slate-800 rounded p-4">
      <h1 className="font-bold text-lg">Create Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div className='grid grid-cols-[auto_1fr]'>
          <form.Field
            name="name"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name} className='whitespace-nowrap'>Product name:</label>
                  <input
                    className="border border-slate-800 rounded"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </>
              );
            }}
          />
          <form.Field
            name="url"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Product url:</label>
                  <input
                    className="border border-slate-800 rounded"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </>
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

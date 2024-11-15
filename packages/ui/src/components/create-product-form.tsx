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
    <div>
      <h1>Create Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
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
                <>
                  <label htmlFor={field.name}>Productname:</label>
                  <input
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
            <>
              <button
                type="submit"
                disabled={!canSubmit}
              >
                {isSubmitting ? '...' : 'Submit'}
              </button>
              <button
                type="reset"
                onClick={() => form.reset()}
              >
                Reset
              </button>
            </>
          )}
        />
      </form>
    </div>
  );
};

export default CreateProductForm;

import api from '@/api';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateProductDTO } from 'api';
import { FC } from 'react';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const CreateProductForm: FC = () => {
  const queryClient = useQueryClient();

  const createProductMutation = useMutation({
    mutationFn: async (value: CreateProductDTO) => {
      return api.createProduct(value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] });
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
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardHeader>
          <CardTitle>Create Product</CardTitle>
          <CardDescription>Create a new Product</CardDescription>
        </CardHeader>
        <CardContent className='grid grid-cols-[auto_1fr] gap-4 items-center'>
          <form.Field
            name="name"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name} className='whitespace-nowrap'>Product name:</label>
                  <Input
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
                  <Input
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
        </CardContent>
        <CardFooter className="flex gap-4 justify-end">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <Button variant="destructive" type="reset" onClick={() => form.reset()}>Reset</Button>
                <Button variant="secondary" type="submit" disabled={!canSubmit}>{isSubmitting ? '...' : 'Create'}</Button>
              </>
            )}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateProductForm;

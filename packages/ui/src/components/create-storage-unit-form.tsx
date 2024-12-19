import api from '@/api';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateStorageUnitDTO } from 'api';
import { FC } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

const CreateStorageUnitForm: FC = () => {
  const queryClient = useQueryClient();

  const createStorageUnitMutation = useMutation({
    mutationFn: async (value: CreateStorageUnitDTO) => {
      return api.createStorageUnit(value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['storageUnit'] });
      form.reset();
    },
  });

  const form = useForm<CreateStorageUnitDTO>({
    defaultValues: {
      name: '',
      columns: 1,
      rows: 1,
    },
    onSubmit: async ({ value }) => {
      await createStorageUnitMutation.mutateAsync(value);
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
          <CardTitle>Create Storage Unit</CardTitle>
          <CardDescription>Create a new Storage Unit</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-[auto_1fr] gap-4 items-center">
          <form.Field
            name="name"
            children={(field) => {
              return (
                <>
                  <label
                    htmlFor={field.name}
                    className="whitespace-nowrap"
                  >
                    Name:
                  </label>
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
            name="columns"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Columns:</label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                </>
              );
            }}
          />
          <form.Field
            name="rows"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Rows:</label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value ? parseInt(e.target.value) : 0)}
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

export default CreateStorageUnitForm;

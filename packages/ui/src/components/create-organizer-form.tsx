import api from '@/api';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateOrganizerDTO } from 'api';
import { FC } from 'react';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const CreateOrganizerForm: FC = () => {
  const queryClient = useQueryClient();

  const createOrganizerMutation = useMutation({
    mutationFn: async (value: CreateOrganizerDTO) => {
      return api.createOrganizer(value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organizer'] });
      form.reset();
    },
  });

  const form = useForm<CreateOrganizerDTO>({
    defaultValues: {
      name: '',
      columns: 0,
      rows: 0,
    },
    onSubmit: async ({ value }) => {
      await createOrganizerMutation.mutateAsync(value);
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
          <CardTitle>Create Organizer</CardTitle>
          <CardDescription>Create a new Organizer</CardDescription>
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

export default CreateOrganizerForm;

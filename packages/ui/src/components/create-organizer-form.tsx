import api from '@/api';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateOrganizerDTO } from 'api';
import { FC } from 'react';

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
    <div className="border border-slate-800 rounded p-4">
      <h1 className="font-bold text-lg">Create Organizer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-[auto_1fr]">
          <form.Field
            name="name"
            children={(field) => {
              return (
                <>
                  <label
                    htmlFor={field.name}
                    className="whitespace-nowrap"
                  >
                    Organizer name:
                  </label>
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
            name="columns"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Columns:</label>
                  <input
                    className="border border-slate-800 rounded"
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
                  <input
                    className="border border-slate-800 rounded"
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

export default CreateOrganizerForm;

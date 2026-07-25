type BookingRequest = {
  name?: unknown;
  contact?: unknown;
  placement?: unknown;
  size?: unknown;
  idea?: unknown;
  consent?: unknown;
};

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;

    const name = getString(body.name);
    const contact = getString(body.contact);
    const placement = getString(body.placement);
    const size = getString(body.size);
    const idea = getString(body.idea);
    const consent = body.consent === true;

    if (!name || !contact || !idea) {
      return Response.json(
        {
          success: false,
          message:
            "Заполни имя, контакт и описание идеи.",
        },
        {
          status: 400,
        }
      );
    }

    if (!consent) {
      return Response.json(
        {
          success: false,
          message:
            "Необходимо согласие на обработку данных.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length > 100) {
      return Response.json(
        {
          success: false,
          message: "Имя указано некорректно.",
        },
        {
          status: 400,
        }
      );
    }

    if (contact.length > 150) {
      return Response.json(
        {
          success: false,
          message: "Контакт указан некорректно.",
        },
        {
          status: 400,
        }
      );
    }

    if (idea.length > 3000) {
      return Response.json(
        {
          success: false,
          message:
            "Описание идеи слишком длинное.",
        },
        {
          status: 400,
        }
      );
    }

    const booking = {
      name,
      contact,
      placement,
      size,
      idea,
      createdAt: new Date().toISOString(),
    };

    console.log("Новая заявка Kashchey Tattoo:");
    console.log(booking);

    return Response.json(
      {
        success: true,
        message:
          "Заявка успешно отправлена. Мастер свяжется с тобой для обсуждения деталей.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Ошибка обработки заявки:", error);

    return Response.json(
      {
        success: false,
        message:
          "Не удалось отправить заявку. Попробуй ещё раз немного позже.",
      },
      {
        status: 500,
      }
    );
  }
}
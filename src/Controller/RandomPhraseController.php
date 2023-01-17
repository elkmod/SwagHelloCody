<?php declare(strict_types=1);

namespace SwagHelloCody\Controller;

use SwagHelloCody\Content\RandomPhraseGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(defaults={"_routeScope"={"store-api"}})
 */
class RandomPhraseController extends AbstractController
{
    /**
     * @var RandomPhraseGenerator
     */
    private $phraseGenerator;

    public function __construct(RandomPhraseGenerator $phraseGenerator)
    {
        $this->phraseGenerator = $phraseGenerator;
    }

    /**
     * @Route("/store-api/random-phrase", name="store-api.random-phrase", methods={"GET"})
     */
    public function randomPhrase()
    {
        return new JsonResponse([
            'phrase' => $this->phraseGenerator->generatePhrase()
        ]);
    }
}
